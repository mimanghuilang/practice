/**
 * Created by jm on 2018/11/06.
 */
(function () {
  var zxEditor;
  var $query;
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
      // 初始化容器高度
      this.initHeight();
      // 初始化本地存储的数据
      this.initLocalData();
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
    };
    // 初始化高度
    Fun.prototype.initHeight = function () {
      // 窗口高度
      var winHeight = window.innerHeight;
      // 编辑器
      var $editorContent = zxEditor.$content;
      var contentTop = $editorContent.getBoundingClientRect().top;
      $editorContent.style.minHeight = winHeight - contentTop - zxEditor.toolbarHeight + 'px';
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
        zxEditor.setContent(data.content);
      }
    };

    Fun.prototype.initPageButtonClick = function () {
      const that = this;
      //  返回按钮的点击事件
      $(this.options.backButton).on("click", function () {
        that.handleBackClick();
      });
      // 完成的点击事件
      $(this.options.finishWorkButton).on("click", function () {
        that.handleSubmitClick();
      });
    };
    // 返回
    Fun.prototype.handleBackClick = function () {
      zxEditor.dialog.alert('点击了返回按钮');
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
        // 需要提交的数据
        // 防止提交失败，再保存一次base64图片上传后的文章数据
        zxEditor.storage.set('article', data);

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
        // 获取正文内容
        content: zxEditor.getContent()
      }
      return (!data.content || data.content === '<p><br></p>')
        ? null
        : data;
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
      // 当前的文章的id
      articleId: "",
      // 上传图片的接口
      uploadImgPort: "/haha.php",
      // 上传数据的接口
      submitArticlePort: "/submitArticlePort",
      // 获取数据的接口
      getDataPort: "/getDataPort",
      // 返回按钮
      backButton: ".back-button",
      // 完成的按钮
      finishWorkButton: ".finish-work",
      // 插件的容器
      editorContainer: "#editorContainer",
    };
    $.extend(options, arguments[0]);
    $(this).each(function (index, elem) {
      new richText($(elem), options);
    });
  };
})();
