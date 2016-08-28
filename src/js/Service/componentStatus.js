export default {
    Header: {
        __show: false,
        show: function() {
            this.__show = true;
        },
        hide: function() {
            this.__show = false;
        },
        isShow: function() {
            return this.__show;
        }
    },
    Loading: {
        status: 'hide',
        show: function() {
            this.status = 'loading';
        },
        hide: function() {
            this.status = 'hide';
        },
        isShow: function() {
            return this.status == 'loading';
        }
    },
    Alert: {
        dialogOpen: false,
        text: "",
        show: function() {
            this.dialogOpen = true;
        },
        hide: function() {
            this.dialogOpen = false;
        },
        setText: function(text){
            this.text = text;
        }
    }
}
