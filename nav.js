document.getElementById("site-nav").innerHTML = `
  <details class="dropdown">
    <summary>首頁 ▾</summary>
    <div class="dropdown-menu">
      <a href="index.html">回到首頁</a>
      <a href="about.html">關於我</a>
      <a href="resume.html">個人履歷</a>
      <a href="contact.html">聯絡我</a>
    </div>
  </details>
  <a href="works.html">作品集</a>
  <details class="dropdown">
    <summary>日常生活 ▾</summary>
    <div class="dropdown-menu">
      <a href="reading.html">閱讀心得</a>
      <a href="album.html">生活相簿</a>
    </div>
  </details>
`;
