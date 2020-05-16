class ThirdPartyYoutoubeLib {
    getListVideos() {
        throw new Error('There is no realisation of getListVideos');
    }
    getVideoInfo() {
        throw new Error('There is no realisation of getVideoInfo');
    }
}

class YoutubeVideos extends ThirdPartyYoutoubeLib {
    constructor() {
        // something important
    }
    getListVideos() {
        console.log('Get array of videos');
        
        return []; // some response 
    }
    getVideoInfo(id) {
        console.log('Make request to get ' + id);
        
        return {} // some response
    }
}

class CachedYoutubeVideos extends ThirdPartyYoutoubeLib {
    constructor() {
        this.cacheList = null;
        this.cacheVideos = {};
        this.youtubeVideos = new YoutubeVideos();
    }
    getListVideos() {
        if (!this.cacheList) {
            this.cacheList = this.youtubeVideos.getListVideos();
        }
        
        return this.cacheList;
    }
    getVideoInfo(id) {
        if (!this.cacheVideos[id]) {
            this.cacheVideos[id] = this.youtubeVideos.getVideoInfo(id);
        }
        
        return this.cacheVideos[id];
    }
}