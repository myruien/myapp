
new Vue({
	el:'#app',
	data:function(){
		return{
			userInfo:{ //添加用户信息
				name:'',
				gender:'',
				phoneNum:'',
				birthday:'',
			},
			tableData: [{
				name:'曦和',
				gender:'男',
			    phoneNum:'123456789',
				birthday:'2020-09-28'
			 }],
			 dialogVisible: false,//弹框的显示
			 editObj:{
				 name:'',
				 gender:'',
				 phoneNum:'',
				 birthday:'',
			 },
			 userIndex: 0,
		}
	},
	methods:{
		//添加用户信息
		addUser(){
			if(!this.userInfo.name){
				this.$message({
				    message: '请输入姓名！',
				    type: 'warning'
				});
			}
			if(!this.userInfo.gender){
				this.$message({
				    message: '请输入性别！',
				    type: 'warning'
				});
			}
			if(!this.userInfo.phoneNum){
				this.$message({
				    message: '请输入电话号码！',
				    type: 'warning'
				});
			}
			if(!/^1[3456789]\d{9}$/.test(this.userInfo.phoneNum)){
				this.$message({
				    message: '请输入正确的电话号码！',
				    type: 'warning'
				});
			}
			if(!this.userInfo.birthday){
				this.$message({
				    message: '请输入生日！',
				    type: 'warning'
				});
			}
			this.tableData.push(this.userInfo);
			this.userInfo = {
				name:'',
				gender:'',
				phoneNum:'',
				birthday:'',
			};
		},
		//删除一组数据
		delUser(idx){
			//console.log(idx);
			this.$confirm('确认删除？')
			     .then(_ => {
			       this.tableData.splice(idx,1);
			})
			     .catch(_ => {});
		},
		//编辑数据
		editUser(item,idx){
			this.userIndex = idx;
			this.editObj = {
				name:item.name,
				gender:item.gender,
				phoneNum:item.phoneNum,
				birthday:item.birthday,
			};
			this.dialogVisible = true;
		},
		//查看数据
		checkUser(){
			
		},
		handleClose(){
			this.dialogVisible = false;
		},
		confirm(){
			this.dialogVisible = false;
			Vue.set(this.tableData, this.userIndex, this.editObj);
			// this.tableData[this.userIndex] = this.editObj;
		}
	}
})