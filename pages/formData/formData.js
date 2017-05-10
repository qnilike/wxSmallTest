var app = getApp();
Page({
    data: {
    	inputValue:"",
    	radioValue:"",
    	coursesName:[],
        sexs: [
            {sexsName:"男"},
            {sexsName:"女"}
        ],
        courses: [
            { coursesName: "小程序开发课程" },
            { coursesName: ".net开发课程" },
            { coursesName: "java开发课程" }
        ],
        studentInfo:{}
    },
    onLoad:function(options){
    	//页面初始化
    },
    //form的bindsubmit事件
    submitStudentInfo:function(e){
    	console.log("我已经提交啦",e);
    },
    //form的bindreset事件
    resetStudent:function(e){
    	console.log("重置成功！");
    },
    //input姓名，绑定的bindinput方法，单个保存value值
    inputValue:function(e){
    	var that=this;
    	var inputValue=e.detail.value;
    	that.setData({
    		inputValue:inputValue
    	})
    },
    //点击btn提交按钮的事件，整体保存form表单中的值到studentInfo中
    btnStudentInfo:function(event){
    	console.log(event);
    	var that=this;
    	var studentInfo=event.currentTarget.dataset;
    	that.setData({
    		studentInfo:studentInfo
    	})
    }
})
