	var Interface = function(name,methods){
		if(arguments.length != 2){
			alert("interface must have two paramters...");
		}
		this.name = name;//����ǽӿڵ�����
		this.methods = [];//�������������ת�غ�����
		for (var i = 0; i < methods.length; i++) {
			if(typeof methods[i] != "string"){
				alert("method name must is String ...")
			}else{
				this.methods.push(methods[i])
			}
		}
	}
	//����ӿڵ�һ����̬������ʵ�ֽӿ���ʵ�����ֱ�Ӽ���
	//��̬������Ҫд��Interface.prototype.* ��Ϊ����д���ӿ�ԭ�����ϵ�
	//����Ҫ�Ѿ�̬�ĺ���ֱ��д��������
	Interface.ensureImplements = function(object){
		if(arguments.length<2){
			alert("����������2������");
			return false;
		}
		//����
		for (var i = 1; i < arguments.length; i++) {
			var inter = arguments[i];
			//������ǽӿھͱ�����Interface���͵�
			if(inter.constructor != Interface){
				throw new Error("if is interface class must is Interface type");
			}
			//�����������ϲ�����
			for (var j = 0; j < inter.methods.length; j++) {
				var method = inter.methods[j];
				//ʵ�����б����з������� �� �ӿ������еķ�������Ŀ
				if(!object[method] || typeof object[method] != "function"){
					throw new Error("ʵ���ಢ��û����ȫʵ�ֽӿ��е����з���...");
				}
			}
		}
	}