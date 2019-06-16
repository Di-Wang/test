<template>
    <div class="container">
        <Popup :popupicon="popupicon" :tabtitle="activetitle" :show.sync="show"/>

        <!-- tab键 -->
		<div class="tab_box">
            <div v-for="item in tabs" :key="item.id" :class="['tab_btn', {active: item.tabstatus == num}]" @click="toggleTab(item.tabstatus,$event)">
                <p>{{item.tabtitle}}</p>{{item.tabtext}}
            </div>
		</div>
		<!-- 图标 -->
		<div class="tab_content">
			<div class="tab_content_title">{{activetitle}}<span>（&nbsp;适合<i>{{activetext}}</i>&nbsp;）</span></div>
			<ul class="icon_box">
                <li v-for="item in icons" :key="item.id" @click="popups(item.id)" :class="[item.iconstatus == num && num !=2? 'li_active':'', num == 2? 'li_active':'' ]">
                    <div class="icon_item">
                        <i :class="['iconfont', item.iconclass]"></i>
                        <span>{{item.icontitle}}</span>
                    </div>
                </li>
			</ul>
		</div>
		
		<!-- vip区别 -->
		<div class="vip_difference"></div>
    </div>
</template>

<script>

    import Popup from './popup'

    export default {
        name: 'layout',
        components: {
            Popup,
        },
        data() {
            return {
                tabs: [
                    {
                        "tabstatus": "1",
                        "tabtitle": "高级版",
                        "tabtext": "适合独立摄影师"
                    },
                    {
                        "tabstatus": "2",
                        "tabtitle": "定制版",
                        "tabtext": "适合小型工作室"
                    }
                ],
                num: 1,
                icons: [],
                activetitle: "",
                activetext: "",
                popupicon: {},
                show: false
            }
        },
        created () {
            this.$axios("../static/icondata.json",{
                params: {}
            })
            .then(res => {
                // console.log(res.data)
                this.icons = res.data
            })
            .catch(error => {
                console.log(error);
            });

            //初始化
            this.activetitle = this.tabs[this.num-1].tabtitle;
            let activetext = this.tabs[this.num-1].tabtext;
            this.activetext = activetext.substring(2);
        },
        methods: {
            //tab切换
            toggleTab(status_, event) {
                this.num = status_;
                this.activetitle = event.target.firstChild.innerHTML;
                let activetext = event.target.lastChild.data;
                this.activetext = activetext.substring(2);
                
            },
            //li点击 弹出弹窗
            popups(id_) {
                this.popupicon = this.icons[id_];
                this.show = true;
            }
        },
    }
</script>

<style lang="css" scoped>

.container {
	width: 100%;
	display: -webkit-flex;
	display: -moz-flex;
	display: -o-flex;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 14px;
	font-size: 1.4rem;
	background: -webkit-linear-gradient(top, #f7f7f7, #fafafa);
	background: -o-linear-gradient(top, #f7f7f7, #fafafa);
	background: -moz-linear-gradient(top, #f7f7f7, #fafafa);
	background: linear-gradient(top, #f7f7f7, #fafafa);
}

.tab_box {
	width: 100%;
	display: -webkit-flex;
	display: -moz-flex;
	display: -o-flex;
	display: flex;
	flex-direction: row;
	align-items: center;
	background: #fff;
	margin-bottom: .8rem;
	padding: 0 2%;
	box-sizing: border-box;
}

.tab_box .tab_btn{
	width: 46%;
	margin: 1.4rem 2% 1rem;
	background: #f6f6f6;
	border: .1rem solid #eee;
	color: #ababab;
	text-align: center;
	padding: 12% 0;
	font-size: 1.0rem;
}

.tab_box .tab_btn p{
	font-size: 1.8rem;
	font-weight: bold;
	color: #363636;
}

.tab_box .tab_btn.active{
	background: #fff8f6;
	border: .1rem solid #f6a69a;
	color: #ff8f92;
}

.tab_box .tab_btn.active p{
	color: #fd4d57;
}

.tab_content {
	width: 100%;
	display: -webkit-flex;
	display: -moz-flex;
	display: -o-flex;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #fff;
	padding: 6% 0 8%;
}

.tab_content .tab_content_title {
	width: 100%;
	padding: 0 4%;
	box-sizing: border-box;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 1.6rem;
	font-weight: bold;
	color: #363636;
}

.tab_content .tab_content_title span {
	font-size: 1.4rem;
	color: #999999;
	font-weight: normal;
}

.tab_content .tab_content_title span i{
	font-size: 1.4rem;
	color: #fd4d57;
	font-style: normal;
}

.tab_content .icon_box{
	width: 100%;
	font-size: 0;
}

.tab_content .icon_box li{
	width: 20%;
	display: inline-block;
	text-align: center;
}

.tab_content .icon_box li .icon_item{
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	margin-top: 1rem;
}

.tab_content .icon_box li .icon_item span{
	font-size: 1.2rem;
	color: #999;
	display: inline-block;
	margin-top: .5rem;
}

.tab_content .icon_box li .icon_item i{
	width: 4rem;
	height: 4rem;
	line-height: 4rem;
	background: #fdeae8;
	border-radius: 50rem;
	display: inline-block;
	margin-top: 1rem;
	font-size: 2.4rem;
	color: #fcd3cf;
}

.tab_content .icon_box li.li_active .icon_item span{
	color: #363636;
}

.tab_content .icon_box li.li_active .icon_item i{
	background: #fee8e7;
	color: #fd4d57;
}

.vip_difference {
	width: 100%;
	height: 20rem;
	margin-top: .8rem;
	background: #fff;
}


</style>