$(document).ready(function(){
	var $imgrolls = $("#slider .pagenation li");
	var len = $imgrolls.length;
	var index=0;
	var adTimer = null;
	$("#slider .pagenation li").mouseover(function(){
		index=$imgrolls.index(this);   //��ȡ������� li ��index
		showImg(index);      //ִ�й�����������index�������ǵ��û������ڼ��ŵ�ʱ�����ʾ�ڼ��� 
		}).eq(0).mouseover();  //������꾭����һ�ţ�eq(0)ָ���ǵ�һ��
		
	//��껬�룬ֹͣ��������껬������ʼ����
	$("#slider").hover(function(){
		clearInterval(adTimer);    //������ƶ���ͼƬ�ϣ��ص���ʱ�������ǲ�����ͼƬ����
	},function(){
		adTimer = setInterval(function(){  //�뿪��ʱ�򿪶�ʱ����ͼƬ��������
			showImg(index);
			index++;
			if(index==len){index=0;}          //���һ��ͼƬ֮��ת����һ��
		},2000);
	}).trigger("mouseleave");            //��������ʹ�������뿪�¼�������ͼƬ����
})
	
	

function showImg(index){            //�������� 
	var $rollobj=$("#slider");
	var $rolllist=$rollobj.find(".pagenation li");
	var newhref=$rolllist.eq(index).attr("href");     //��index�������������ǵ��ڼ�����꾭����ʱ�򣬵ڼ��ž͹�������
	$("#slider .image").attr("href",newhref)
	                .find("li").eq(index).stop(true,true).fadeIn()
					.siblings().fadeOut();
	$rolllist.removeClass("current").eq(index).addClass("current"); /*��һ�д��������$rolllist.css("backgroundColor","#d3d3d3");
																															$rolllist.eq(index).css("backgroundColor","red");�����д������*/

	}

 

 