// JavaScript Document// JavaScript Document
// JavaScript Document
window.onload = function() {

    var header = document.getElementById('header');
    var footer = document.getElementById('footer');

    if(get_scroll('Height')===true) {
        header.style.paddingRight = "130px";
        footer.style.paddingRight = "20px";
    }
    window.onresize = function(){
        if(get_scroll('Height')===true) {
            header.style.paddingRight = "130px";
            footer.style.paddingRight = "20px";
        }
        else{
            header.style.paddingRight = " ";
            footer.style.paddingRight = " ";
        }

       console.log( get_scroll('Height'))
    }
    function get_scroll(a) {
        var d = document,
        b = d.body,
        e = d.documentElement,
        c = "client" + a;
        a = "scroll" + a;
        return /CSS/.test(d.compatMode)? (e[c]< e[a]) : (b[c]< b[a])
    };



    var js_active = document.getElementsByClassName('js_active');//nav menu
    var slider_title = document.querySelectorAll(".tt li");//slide  images  titles
    var slid_cont = document.getElementById('slide1');//slide images content
    var play = document.getElementsByClassName("play");//play stop buttom

    var recordIconsBgs = document.querySelectorAll(".data_track_icons ul li");//nota  star  fb
    var showHide = document.getElementById("show_hide");//buttom hide  show footer player
    var record = document.getElementById('player_content');

    var x = 0
    showHide.onclick = function(){
        var data = this.getAttribute("data-num");
        if(data == x) {
            this.parentElement.style.bottom = '520px';
            //record.style.display='block';
            x++;
        }
        else{
            this.parentElement.style.bottom = '-45px'
           // record.style.display='none';
            x--;
        }
    }




    for(var i = 0; i < js_active.length; i++) {
        var a_activ = js_active[i];
        a_activ.onclick = function() {
            for(var j=0;j < js_active.length;j++){
                js_active[j].classList.remove("activ_a")
            }
            this.classList.add('activ_a');
        }
    }

    for(var i = 0; i < recordIconsBgs.length; i++) {
        var recordIconsBg = recordIconsBgs[i];

        recordIconsBg.onclick = function() {

            for(var j=0;j < recordIconsBgs.length;j++){
                recordIconsBgs[j].classList.remove("data_track_icons_active")
            }
            this.classList.add('data_track_icons_active');

        }
    }

//slider


    var slidshow = [
        'img/play_music',
        'img/cover1',
        'img/cover2',
        'img/cover3',
        'img/cover4',
        'img/cover5',
        'img/cover'
    ];
    var i = 0;
    slid_cont.style.background = " url(" + slidshow[i] + '.jpg' + ")no-repeat";
    var count_slid = slidshow.length;

    setInterval( function() {

            slid_cont.style.background = " url(" + slidshow[i] + '.jpg' + ")no-repeat";
            slid_cont.setAttribute('data_title',i);

            for(var j=0; j < slider_title.length; j++){
                slider_title[j].onclick = function() {
                    var res_attr= this.getAttribute('data-num');
                    slid_cont.style.background = " url(" + slidshow[res_attr-1] + '.jpg' + ")no-repeat";
                    slider_title[i].classList.remove('slides_li_active');
                    slider_title[res_attr-1].classList.add('.slides_li_active');
                    i = res_attr-1;

                }
                slider_title[j].classList.remove("slides_li_active");
            }

            slider_title[i].classList.add('slides_li_active');
            i++;

            if(i == count_slid-1)i=0;

    } , 3000);

/*play list*/

    var  play_count = play.length;

    for(var k = 0 ;k < play_count;k++ ){
        var play_stop =  play[k];
        play_stop.onclick = function(){
            if(this.classList.contains("stop")) {
                this.classList.toggle("stop");
                return;
            }
            for(var f=0;f<play_count;f++){
                play[f].classList.remove("stop");
            }

            this.classList.add("stop");
        }

    }
//albom
    var indicators = document.querySelectorAll('.indicators li');//idicators
    var cont_alboms = document.getElementsByClassName("cont_albom");//albom section  in count albom
    var albom_sections = document.querySelectorAll(".albom_section li");//albom  sections
    for(var i=0;i<albom_sections.length;i++){

        var albom_section = albom_sections[i];
        albom_section.onclick = function(){
            var display_blocks = document.querySelectorAll(".display_block .sub_albom");

            var  albom_attr= this.getAttribute('data-slide-to');
            for(var j=0;j<albom_sections.length;j++){
                display_blocks[j].classList.remove('display_block');
                albom_sections[j].classList.remove('albom_section_activ');
                cont_alboms[j].classList.remove('display_block');
                indicators[j].classList.remove('indicators_li_active');
            }
            display_blocks[0].classList.add('display_block');
            indicators[0].classList.add('indicators_li_active');
            cont_alboms[albom_attr].classList.add('display_block');
            this.classList.add('albom_section_activ');
        }
        var indicator = indicators[i];

            indicator.onclick = function(){

            var display_blocks = document.querySelectorAll(".display_block .sub_albom");
            var indicator_attr = this.getAttribute('data-slide-to');


            for(var j=0;j<albom_sections.length;j++){
                indicators[j].classList.remove('indicators_li_active');
                display_blocks[j].classList.remove('display_block');
            }
            display_blocks[indicator_attr].classList.add('display_block');
            this.classList.add('indicators_li_active');
        }

    }

}








