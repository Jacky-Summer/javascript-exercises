var wrapper = document.querySelector('.wrapper');
wrapper.innerHTML += wrapper.innerHTML;
utils.css(wrapper, 'width', utils.css(wrapper, 'width') * 2);//=>克隆完成后别忘记修改一下WRAPPER的宽度(内容变多了)

setInterval(function(){

     //=>获取当前WRAPPER的LEFT值，减去步长，把最新的LEFT赋值给元素即可
    let curL = utils.css(wrapper, 'left');
    curL -= 2;
    utils.css(wrapper, {
        left: curL
    });

    //=>实现无缝:当我们UL距离MARQUEE-BOX的左偏移已经是整个WRAPPER的一半宽度(第一组原始内容已经运动完成了，现在看到的是克隆后的)，此时我们让WRAPPER立即运动到LEFT为零的位置即可
    if (Math.abs(wrapper.offsetLeft) >= utils.css(wrapper, 'width') / 2) {
        utils.css(wrapper, 'left', 0);//=>立即回到起始的位置
    }
},17);