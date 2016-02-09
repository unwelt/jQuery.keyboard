(function($) {
	$.keyboard.keyboards.qwerty_rus	= [
		['ё','1','2','3','4','5','6','7','8','9','0','-',{text:'Backspace',name:'backSpace',action:function(e){return false;}}],
		[{text:'Tab', cap: {text:'TAB'},name:'tab', action:false},'й','ц','у','к','е','н','г','ш','щ','з','х','ъ',{text:'',name:'return',action:false}],
		[{text:'Caps Lock',name:'capsLock',action:function(e){e.keyboard('capToggle',true); return false;}},'ф','ы','в','а','п','р','о','л','д','ж','э'],
		[{text:'Shift',name:'leftShift',action:function(e){e.keyboard('capToggle'); return false;}},'я','ч','с','м','и','т','ь','б','ю','.',{text:'Shift',name:'rightShift',action:function(e){e.keyboard('capToggle'); return false;}}],
		[{text:' ',name:'space'}]
	];
})(jQuery);