// ==UserScript==
// @name         Unlock_H11_Virtual_Media
// @namespace    http://github.com/lclancey/Unlock_H11_Virtual_Media
// @version      0.1
// @description  Enable SuperMicro AST2500's Virtual_Media function for h5kvm.
// @author       lclancey
// @match        *://*/cgi/url_redirect.cgi?url_name=man_ikvm_html5_bootstrap
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 解锁主界面Virtual Media按钮
    const menuVM = document.getElementById('menuVM');
    if(menuVM){
        menuVM.className='dropdown';
        menuVM.title="Unlocked by lclancey."

        // 解锁主界面Virtual Media下拉选项
        menuVM.getElementsByClassName('dropdown-toggle')[0].setAttribute('data-toggle','dropdown');

        // 解锁挂载对话框的按钮
        ['0','1','2'].forEach(index=>{
            ['dev_type','iso_input'].forEach(id=>{
                document.getElementById(id+index).disabled=false
            })
            console.log("Unlock_H11_Virtual_Media: Tried to unlock.Check does it work.")
        })}else{
            console.err("Unlock_H11_Virtual_Media: Not supported,please confirm your BMC version, or leave a issue.")
        }
})();