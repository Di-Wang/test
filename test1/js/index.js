$(function(){
	// var icondata = $.ajax({
	// 	type: "GET",
	//     url: "",
	//     async: true,
	//     data : {},//数据，这里使用的是Json格式进行传输 
	//     success: function(res) {
	//     	if (res == 'success') {}
	//     }
	// })

	//加载dom
	var dom = $(".icon_box");
	var data = icondata;
	var iconDOM = "";
	$.each(data, function(i,n){
		iconDOM += `
			<li iconstatus="${n.iconstatus}" data-id="${n.id}">
				<div class="icon_item">
					<i class="iconfont ${n.iconclass}"></i>
					<span>${n.icontitle}</span>
				</div>
			</li>
		`
		// console.log(`${n.id}`)
		// console.log(`${n.icontext}`)
		// var t = (`${n.iconstatus}` == 1)? 'li_active':'';
		// if (t) {
		// 	console.log(t)
		// }
	});
	dom.html(iconDOM);


	// 初始化高亮
	highlight(1);

	function highlight(tab_status_) {
		let tab_status = tab_status_;
		var li = $(".icon_box li");

		if (tab_status == 2) {
			li.each(function(){
				$(this).addClass("li_active")
			})
		} else {
			li.removeClass("li_active");
			for (var i = 0; i < li.length; i++) {
				var li_status = li.eq(i).attr("iconstatus");
				if (tab_status == li_status) {
					li.eq(i).addClass("li_active");
				}
			}
		}	
	}
	//tab切换
	$(".tab_btn").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var content_title = $(this).children(0).html();
		var content_span = $(this)[0].lastChild.innerHTML;
		var content_i =  content_span.substring(2);//slice
		var title_str = `
			${content_title}<span>（&nbsp;适合<i>${content_i}</i>&nbsp;）</span>
		`;
		$(".tab_content_title").html(title_str);
		let tab_status = $(this).attr("tabstatus");
		highlight(tab_status);
	})

	// 弹窗dom
	var popup = `
		<div id="popup">
			<div class="popup_coontent">
				<p class="popup_title"></p>
				<div class="popup_text"></div>
			</div>
			<img class="btn_close" src="images/cuo.png" alt="">
		</div>
	`
	$(".container").prepend(popup);

	// 点击图标 弹窗
	$(".icon_box li").click(function(e){
		$("#popup").addClass("show");
		let id = e.currentTarget.dataset.id;
		let icontitle = data[id].icontitle;
		let icontext = data[id].icontext;
		let tab_title = $(".tab_btn.active p").html();

		$(".popup_title").html(tab_title + "-" + icontitle)
		$(".popup_text").html(icontext);
	})
	// 关闭弹窗
	$(".btn_close,#popup").click(function(){
		$("#popup").removeClass("show");
	})
})