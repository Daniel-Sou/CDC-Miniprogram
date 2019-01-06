Page({
  data: {
    weeklyMovieList: [
      {
        name: "泰坦尼克号",
        comment: "失去的才是永恒的",
        imagePath: "/images/titanic.jpg",
        isHighlyRecommended: false,
        count: 100,
        score: 90
      },
      {
        name: "这个杀手不太冷",
        comment: "小萝莉与怪蜀黍纯真灿烂的爱情故事",
        imagePath: "/images/leon.jpg",
        isHighlyRecommended: false,
        count: 120,
        score: 85
      },
      {
        name: "教父",
        comment: "最精彩的剧本，最真实的黑帮电影。",
        imagePath: "/images/jf.jpg",
        isHighlyRecommended: true,
        count: 123,
        score: 83
      }
    ],

  like: 0,
  star: 0
  },

  onLoad: function (options) {
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1
    })
  },

  onShow: function () {

  },

  onReady: function () {

  },

  onHide: function () {

  },
  
  f0: function(event) {
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1
    }) 
  },
 
  f1: function(event) {
    this.setData({
      like: this.data.like + 1,
      "weeklyMovieList[2].name": "教父3"
    })
  },

  f2: function (event) {
    this.setData({
      star: this.data.star + 1,
      "weeklyMovieList[2].name": "教父3"
    })
  }

})

/*
Data binding in JS
data: {}
*/