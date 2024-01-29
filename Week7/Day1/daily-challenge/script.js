class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(
      `${this.uploader} watched all ${this.time} seconds of ${this.title}!`
    );
  }
}

let video1 = new Video("JavaScript Tutorial", "Alice", 300);
video1.watch();

let video2 = new Video("HTML Basics", "Bob", 200);
video2.watch();

let videosData = [
  { title: "CSS Fundamentals", uploader: "Charlie", time: 400 },
  { title: "React Introduction", uploader: "Dave", time: 500 },
  { title: "Node.js Guide", uploader: "Eve", time: 600 },
  { title: "Angular Tips", uploader: "Frank", time: 350 },
  { title: "Vue for Beginners", uploader: "Grace", time: 450 },
];

let videoInstances = videosData.map(
  (data) => new Video(data.title, data.uploader, data.time)
);

videoInstances.forEach((video) => video.watch());
