<template>
    <div id="popup" :class="{show: show}" @click="popupclose">
        <div class="popup_coontent">
            <p class="popup_title">{{tabtitle}}-{{popupicon.icontitle}}</p>
            <div class="popup_text">{{popupicon.icontext}}</div>
        </div>
        <img class="btn_close" @click="popupclose" :src="btn" alt="">
    </div>
</template>

<script>
    export default {
        name: 'popup',
        data() {
            return {
                btn: require("../assets/icon/cuo.png")
            }
        },
        props: {
            popupicon: Object,
            tabtitle: String,
            show: Boolean
        },
        methods: {
            popupclose(event) {
                this.$emit('update:show', false);
            }
        },
    }
</script>

<style lang="css" scoped>

#popup {
	width: 100vw;
	height: 100vh;
	background: rgba(0,0,0,0.4);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99999;
	display: -webkit-flex;
	display: -moz-flex;
	display: -o-flex;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	display: none;
}

#popup.show {
	display: flex;
}

#popup .popup_coontent {
	width: 70%;
	min-height: 26rem;
	max-height: 40rem;
	overflow-y: auto;
	background: #fff;
	padding: 8%;
	opacity: 0;
	animation: animtop .5s;
	-moz-animation: animtop .5s;
	-webkit-animation: animtop .5s;
	-o-animation: animtop .5s;
	-webkit-transition: all 0.3s ease-in-out 0.1s;
	-moz-transition: all 0.3s ease-in-out 0.1s;
	-o-transition: all 0.3s ease-in-out 0.1s;
	transition: all 0.3s ease-in-out 0.1s;
}

#popup.show .popup_coontent {
	opacity: 1;
}


#popup .popup_coontent .popup_title{
	color: #363636;
	font-weight: bold;
	font-size: 1.6rem;
	margin-bottom: 1rem;
}

.btn_close {
	width: 3rem;
	height: 3rem;
	margin-top: 1rem;
	opacity: 0;
	animation: animbottom .5s;
	-moz-animation: animbottom .5s;
	-webkit-animation: animbottom .5s;
	-o-animation: animbottom .5s;
	-webkit-transition:  0.3s ease-in-out 0.1s;
	-moz-transition:  0.3s ease-in-out 0.1s;
	-o-transition:  0.3s ease-in-out 0.1s;
	transition:  0.3s ease-in-out 0.1s;
}

#popup.show .btn_close {
	opacity: 1;
	transform: translateY(0px);
	-webkit-transform: translateY(0px);
	-moz-transform: translateY(0px);
}



@keyframes animtop {
	from {transform: translateY(-200px);}
	to {transform: translateY(0px);}
}

@-moz-keyframes animtop {
	from {transform: translateY(-200px);}
	to {transform: translateY(0px);}
}

@-webkit-keyframes animtop {
	from {transform: translateY(-200px);}
	to {transform: translateY(0px);}
}

@-o-keyframes animtop {
	from {transform: translateY(-200px);}
	to {transform: translateY(0px);}
}


@keyframes animbottom {
	from {transform: translateY(200px);}
	to {transform: translateY(0px);}
}

@-moz-keyframes animbottom {
	from {transform: translateY(200px);}
	to {transform: translateY(0px);}
}

@-webkit-keyframes animbottom {
	from {transform: translateY(200px);}
	to {transform: translateY(0px);}
}

@-o-keyframes animbottom {
	from {transform: translateY(200px);}
	to {transform: translateY(0px);}
}

</style>