define(['jquery', 'soundcloud-widget', 'playhead'], function($, Widget, Playhead){
    Widget.prototype.init = function() {
        this.$('.play-btn').click(this.resume.bind(this));
        this.$('.pause-btn').click(this.pause.bind(this));
        this.$('.next-btn').click(this.next.bind(this));
        this.$('.prev-btn').click(this.prev.bind(this));
        this.playlist = [193767403, 146785809, 145702406, 137999625, 130403447, 127606038, 119699390, 95331064, 73695745, 49109494, 46402737];
        this.load(this.playlist[0]);
        this.playhead = new Playhead(this);
    }

    var widget = new Widget($('#player'), 'a.sound-link', 'data-id');

    widget.onPlay = function(){
        this.$('.play-btn').hide();
        this.$('.pause-btn').show();
    };

    widget.onStop = function(){
        this.$('.pause-btn').hide();
        this.$('.play-btn').show();
    };

    widget.whilePlaying = function() {
        this.$('.now-playing').text(this.currentSound.data.title);
        this.playhead.updatePlayhead(this.currentSound);
    };

    widget.whileLoading = widget.whilePlaying;

    return widget;
});
