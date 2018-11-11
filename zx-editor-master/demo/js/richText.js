/**
 * Created by jm on 2018/11/06.
 */
(function () {
  var zxEditor;
  var $query;
  var $titleItems = null;
  var summaryShow = false;
  // 获取body元素
  var $docBody;
  // 封面图元素
  var $coverPic;
  // 摘要，导语栏子元素集（.placeholder, .input-hook）
  var $summaryItems;
  // 预览容器
  var $previewWrapper;

  // 富文本对象
  var richText = (function () {
    var Fun = function () {
      var that = this;
      that.options = arguments[1];
      that.init();
    };
    // 初始化
    Fun.prototype.init = function () {
      // 初始化富文本插件
      this.initZxEditor();
      // 插件底部追加按钮
      this.addFooterButtons();
      // 封面图栏
      this.handleCoverWrapper();
      // 标题栏
      this.handlePlaceholderInputWrapper(this.options.titleWrapper);
      // 导语摘要栏
      this.handlePlaceholderInputWrapper(this.options.summaryWrapper);
      // 初始化容器高度
      this.initHeight();
      // 初始化本地存储的数据
      this.initLocalData();
      // 导语点击事件
      this.introductionClick();
      // 初始化页面按钮的点击事件
      this.initPageButtonClick();
    };
    // 初始化插件
    Fun.prototype.initZxEditor = function () {
      const that = this;
      // 实例化插件
      zxEditor = new ZxEditor('#editorContainer', {
        // 顶部偏移距离
        // demo有顶部导航栏，高度44
        top: that.options.position.top,
        // 编辑框左右边距
        padding: that.options.position.padding,
      });


      // 赋值全局变量
      $query = zxEditor.query || function (selector, context) {
        return (context || document).querySelector(selector)
      };
      // 获取body元素
      $docBody = $query('body');
      // 封面图元素
      $coverPic = $query(this.options.coverPic);
      // 预览容器
      $previewWrapper = $query(this.options.previewWrapper);
    };
    // 追加按钮，未添加事件
    Fun.prototype.addFooterButtons = function () {
      var addFooterButtons = this.options.addFooterButtons;
      addFooterButtons.forEach(function (footerButton) {
        zxEditor.addFooterButton({
          name: footerButton.name,
          // 按钮外容器样式
          class: footerButton.class,
          // 按钮内i元素样式名
          icon: footerButton.icon ? footerButton.icon : "",
          // 需要注册的监听事件名
          on: footerButton.on,
        });
      })
    };
    // 封面图
    Fun.prototype.handleCoverWrapper = function () {
      var imageParams = this.options.imageParams;
      // 封面容器
      var $cover = $query('.cover-wrapper .cover');
      var $input = $query('.cover-wrapper input');
      var $img = zxEditor.query('img', $cover);
      // 点击封面容器处理
      zxEditor.addEvent($cover, 'click', function (e) {
        // var oldSrc = $img.src;
        $input.click();
      });
      // 选中图片文件
      zxEditor.addEvent($input, 'change', function (e) {
        // 添加loading
        zxEditor.dialog.loading('图片处理中...');
        var files = this.files;
        // 处理图片数据(file数据转base64,blobData)
        zxEditor.filesToBase64(files, imageParams, function (err, res) {
          zxEditor.dialog.removeLoading();
          if (err) {
            zxEditor.dialog.alert(err[0].message || '图片处理错误！')
          }
          if (res) {
            $img.src = res[0].base64;
            zxEditor.addClass('has-pic', $cover);
          }
        })
      });
    };
    // 处理标题、摘要placeholder/input切换
    Fun.prototype.handlePlaceholderInputWrapper = function (selector) {
      var $wrapper = $query(selector);
      var $items = zxEditor.queryAll('.item', $wrapper);
      // 输入最大长度
      var maxLength = 30;
      if ($items.length === 0) return;
      if (selector === '.title-wrapper') {
        $titleItems = $items;
      } else if (selector === '.summary-wrapper') {
        $summaryItems = $items;
        maxLength = 140;
      }
      zxEditor.addEvent($items[0], 'click', this._placeholderClickHandler, false);
      zxEditor.addEvent($items[1], 'blur', this._inputHookHandler, false);
      // 输入内容限制
      zxEditor.addEvent($items[1], 'keyup', function (e) {
        var text = this.innerText;
        if (text && text.length >= maxLength) {
          if (e.keyCode !== 8) {
            e.preventDefault();
          } else {
            this.innerText = text.substr(0, maxLength);
          }
        }
      })
    };
    // 初始化高度
    Fun.prototype.initHeight = function () {
      // 窗口高度
      var winHeight = window.innerHeight;
      var headerHeight = 44;
      // 编辑器
      var $editorContent = zxEditor.$content;
      var contentTop = $editorContent.getBoundingClientRect().top;
      $editorContent.style.minHeight = winHeight - contentTop - zxEditor.toolbarHeight + 'px';
      $previewWrapper.style.height = winHeight - headerHeight + 'px';
    };
    // 初始化本地数据,也可以从网上获取
    Fun.prototype.initLocalData = function () {
      var that = this;
      var articleId = that.options.articleId;
      var data;
      if (articleId) {
        data = that.getData("post", that.options.getDataPort, {articleId: that.options.articleId}).data;
      }
      else {
        data = zxEditor.storage.get('article');
      }

      if (data) {
        if (data.cover) {
          zxEditor.addClass('has-pic', $query('.cover'));
          $coverPic.setAttribute('src', data.cover);
        }
        if (data.title) {
          $titleItems[0].style.display = 'none';
          $titleItems[1].style.display = '';
          $titleItems[1].innerText = data.title;
        }
        if (data.summary) {
          $summaryItems[1].innerText = data.summary;
          if(data.summaryShow){
            summaryShow = true;
            $query('.summary-wrapper').style.display = '';
            $summaryItems[0].style.display = 'none';
            $summaryItems[1].style.display = '';
          }
        }
        zxEditor.setContent(data.content);
      }
    };
    Fun.prototype.introductionClick = function () {
      zxEditor.on('summary-button', function () {
        summaryShow = !summaryShow;
        $query('.summary-wrapper').style.display = summaryShow ? '' : 'none';
      });
    };
    Fun.prototype.initPageButtonClick = function () {
      const that = this;
      // 预览按钮的点击事件
      $(this.options.previewButton).on("click", function () {
        that.handlePreviewClick();
      });
      //  返回按钮的点击事件
      $(this.options.backButton).on("click", function () {
        that.handleBackClick();
      });
      // 继续编辑的点击事件
      $(this.options.continueEditButton).on("click", function () {
        that.handleBackPreviewClick();
      });
      // 完成的点击事件
      $(this.options.finishWorkButton).on("click", function () {
        that.handleSubmitClick();
      });
    };
    // 预览
    Fun.prototype.handlePreviewClick = function () {
      // 获取文章数据
      var data = this.getArticleData();
      // 保存文章数据
      zxEditor.storage.set('article', data);
      if (!data) {
        zxEditor.dialog.alert('还未添加任何内容！');
        return;
      }
      // 判断内容是否完善
      if (!data.cover) {
        zxEditor.dialog.alert('请添加文章封面');
        return
      }
      if (!data.title) {
        zxEditor.dialog.alert('请添加文章标题');
        return
      }
      if (!data.content || data.content === '<p><br></p>') {
        zxEditor.dialog.alert('请添加文章内容');
        return
      }

      // 将数据添加到预览容器中
      $query('.preview-cover img', $previewWrapper).src = data.cover;
      $query('.preview-title', $previewWrapper).innerText = data.title;
      var $summay = $query('.preview-summary', $previewWrapper);
      if (data.summary) {
        // 显示摘要
        $summay.style.display = '';
        // 填充摘要(导语)内容
        $summay.innerText = data.summary;
      } else {
        // 隐藏摘要
        $summay.style.display = 'none';
      }
      // 填充正文内容
      $query('.preveiw-content', $previewWrapper).innerHTML = data.content;
      $previewWrapper.style.transform = 'translateX(0)';
      // 禁止body滚动
      zxEditor.lock($docBody);
    };
    // 返回
    Fun.prototype.handleBackClick = function () {
      zxEditor.dialog.alert('点击了返回按钮');
    };
    // 点击继续编辑
    Fun.prototype.handleBackPreviewClick = function () {
      $previewWrapper.style.transform = 'translateX(100%)';
      // 接触body滚动限制
      zxEditor.unlock($docBody);
    };
    // 提交的点击
    Fun.prototype.handleSubmitClick = function () {
      const that = this;
      // 获取文章数据
      var data = that.getArticleData() || {};
      // 显示loading
      zxEditor.dialog.loading();

      // 上传图片数据
      // 上传封面图省略...

      // 处理正文中的base64图片
      // 获取正文中的base64数据数组
      var base64Images = zxEditor.getBase64Images();
      // 上传base64图片数据
      this.uploadBase64Images(base64Images, function () {
        // 正文中有base64数据，上传替换成功后再重新获取正文内容
        if (base64Images.length) {
          data.content = zxEditor.getContent();
        }
        // 填充预览正文内容
        $query('.preveiw-content', $previewWrapper).innerHTML = data.content;
        // 需要提交的数据
        // 防止提交失败，再保存一次base64图片上传后的文章数据
        zxEditor.storage.set('article', data);

        data.summaryShow = summaryShow;
        var response = that.getData("post", that.options.submitArticlePort, data);

        if (response.status === 0) {
          zxEditor.dialog.removeLoading();
          zxEditor.dialog.alert('文章发布成功!', function () {
            // 文章发布成功
            // 清除本地存储的文章数据
            zxEditor.storage.remove('article');
            // 其他操作
            // ...
            // location.reload()
          })
        }
        else {
          zxEditor.dialog.removeLoading();
          zxEditor.dialog.alert('文章发布失败!')
        }
      })
    };
    // 上传数据到后台
    Fun.prototype.getData = function (ajaxType, ajaxUrl, ajaxBaseData) {
      var _response;
      $.ajax({
        type: ajaxType,
        url: ajaxUrl,
        async: false,
        data: ajaxBaseData,
        dataType: "json",
        success: function (response) {
          _response = response;
        }
      });
      return _response;
    };
    // 点击标题、摘要placeholder处理程序
    Fun.prototype._placeholderClickHandler = function (e) {
      var $currentElm = e.currentTarget;
      if (zxEditor.hasClass('placeholder', $currentElm)) {
        this.style.display = 'none';
        var $inputHook;
        if ($currentElm === $titleItems[0]) {
          $inputHook = $titleItems[1];
        } else if ($currentElm === $summaryItems[0]) {
          $inputHook = $summaryItems[1];
        }
        if (!$inputHook) return;
        $inputHook.style.display = '';
        $inputHook.focus();
      }
    }
    // 点击标题、摘要输入框处理程序
    Fun.prototype._inputHookHandler = function (e) {
      var $currentElm = e.currentTarget;
      var $placeholder;
      if ($currentElm === $titleItems[1]) {
        $placeholder = $titleItems[0];
      } else if ($currentElm === $summaryItems[1]) {
        $placeholder = $summaryItems[0];
      }
      if (!$placeholder) return;
      var text = $currentElm.innerText;
      if (!text) {
        $placeholder.style.display = '';
        $currentElm.style.display = 'none';
      }
    }
    // 数据处理，并提交数据处理
    Fun.prototype.uploadBase64Images = function (base64Images, callback) {
      const that = this;
      var len = base64Images.length;
      var count = 0;
      if (len === 0) {
        callback();
        return
      }
      for (var i = 0; i < len; i++) {
        _uploadHandler(base64Images[i]);
      }

      function _uploadHandler(data) {
        that.upload(data.blob, function (url) {
          // 替换正文中的base64图片
          zxEditor.setImageSrc(data.id, url);
          // 计算图片是否上传完成
          _handleCount();
        })
      }

      function _handleCount() {
        count++;
        if (count === len) {
          callback()
        }
      }
    };

    //  文件上传
    Fun.prototype.upload = function (blob, callback) {
      var that = this;
      var uploadImgPort = that.options.uploadImgPort;
      // 将数据以form表单的形式上传
      var formData = new FormData();
      formData.append('file', 'file.png');
      formData.append("data", blob);
      $.ajax({
        type: "POST",
        url: uploadImgPort,
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
          if (response.status === 0) {
            callback(response.data.url);
          }
          else {
            zxEditor.dialog.alert('上传图片失败!');
          }
        },
        fail: function () {
          zxEditor.dialog.alert('上传图片失败!');
        },
      });


    };
    /**
     * 获取文章数据
     * @returns {{}}
     */
    Fun.prototype.getArticleData = function () {
      var data = {
        cover: $coverPic.getAttribute('src'),
        title: $titleItems[1].innerText,
        summary: $summaryItems[1].innerText,
        // 获取正文内容
        content: zxEditor.getContent()
      }
      return (!data.cover && !data.summary && !data.title && (!data.content || data.content === '<p><br></p>'))
        ? null
        : data;
    }

    /**
     * 点击标题、摘要输入框处理程序
     * @private
     */
    Fun.prototype._inputHookHandler = function (e) {
      var $currentElm = e.currentTarget;
      var $placeholder;
      if ($currentElm === $titleItems[1]) {
        $placeholder = $titleItems[0];
      } else if ($currentElm === $summaryItems[1]) {
        $placeholder = $summaryItems[0];
      }
      if (!$placeholder) return;
      var text = $currentElm.innerText;
      if (!text) {
        $placeholder.style.display = '';
        $currentElm.style.display = 'none';
      }
    }
    return Fun;
  })();
  $.fn.richText = function () {
    var options = {
      // 位置
      position: {
        // 距离顶部的位置，demo有顶部导航栏，高度44
        top: 44,
        // 编辑框左右边距
        padding: 13,
      },

      // 图片裁剪的参数
      imageParams: {
        width: 750,
        height: 422,
        // 强制裁剪图片，包括gif
        clip: true
      },
      // 当前的文章的id
      articleId: "",
      // 上传图片的接口
      uploadImgPort: "/haha.php",
      // 上传数据的接口
      submitArticlePort: "/submitArticlePort",
      // 获取数据的接口
      getDataPort: "/getDataPort",


      // 封面图元素
      coverPic: ".cover-wrapper img",
      // 标题栏容器
      titleWrapper: ".title-wrapper",
      // 导语摘要
      summaryWrapper: ".summary-wrapper",
      // 预览按钮
      previewButton: ".preview-button",
      // 返回按钮
      backButton: ".back-button",
      // 继续编辑按钮
      continueEditButton: ".continue-edit",
      // 完成的按钮
      finishWorkButton: ".finish-work",
      // 编辑容器
      previewWrapper: ".article-preview-wrapper",
      // 插件的容器
      editorContainer: "#editorContainer",


      // 末尾追加的按钮
      addFooterButtons: [
        {
          name: 'summary',
          // 按钮外容器样式
          class: 'demo-summary-button',
          // 按钮内i元素样式名
          icon: '',
          // 需要注册的监听事件名
          on: 'summary-button'
        },
      ],
    };
    $.extend(options, arguments[0]);
    $(this).each(function (index, elem) {
      new richText($(elem), options);
    });
  };
})();
