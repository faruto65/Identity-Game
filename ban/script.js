document.addEventListener("DOMContentLoaded", () => {
  const firebaseConfig = {
      apiKey: "AIzaSyAfGZRmXL7VLzzrbaHN958geJL7avf2fNM",
      authDomain: "identity-v-cap.firebaseapp.com",
      databaseURL: "https://identity-v-cap-default-rtdb.firebaseio.com",
      projectId: "identity-v-cap",
      storageBucket: "identity-v-cap.appspot.com",
      messagingSenderId: "34792995136",
      appId: "1:34792995136:web:07a9546cb7af1381fc62a5",
      measurementId: "G-R4EE3E4X5Q"
  };

  firebase.initializeApp(firebaseConfig);
  console.log("Firebaseが初期化されました");

  const database = firebase.database();
  const avatarsRef = database.ref('bans');
  const localAvatars = localStorage.getItem('bans');

  const displayAvatars = (numToShow) => {
    const maxAvatars = 8; // 最大のアバター数
    const avatarFrames = Array.from(document.querySelectorAll('.avatar-frame'));

    // 最初に全ての枠を非表示にする
    avatarFrames.forEach(frame => {
      frame.style.display = 'none';
    });

    // 指定された数だけ枠を表示する
    for (let i = 0; i < numToShow && i < maxAvatars; i++) {
      avatarFrames[i].style.display = 'block';
    }
  };

  if (localAvatars) {
    const avatars = JSON.parse(localAvatars);
    updateAvatars(avatars);
    displayAvatars(avatars.gbBanNumber);
    console.log("ローカルストレージからアバターデータを取得:", avatars);
  }

  avatarsRef.on('value', (snapshot) => {
    const avatars = snapshot.val();
    console.log("Firebaseからアバターデータを取得:", avatars);

    if (avatars) {
      localStorage.setItem('bans', JSON.stringify(avatars));
      updateAvatars(avatars);
      displayAvatars(avatars.gbBanNumber);
    } else {
      console.log("アバターデータが見つかりませんでした。");
    }
  }, (error) => {
    console.error("アバターデータの取得中にエラーが発生:", error);
  });

  function updateAvatars(avatars) {
    if (avatars.ban1) {
      document.getElementById('b1').src = `avatars/${avatars.ban1}.jpg`;
      console.log(`Updating ban1: avatars/${avatars.ban1}.jpg`);
    }
    if (avatars.ban2) {
      document.getElementById('b2').src = `avatars/${avatars.ban2}.jpg`;
      console.log(`Updating ban2: avatars/${avatars.ban2}.jpg`);
    }
    if (avatars.ban3) {
      document.getElementById('b3').src = `avatars/${avatars.ban3}.jpg`;
      console.log(`Updating ban3: avatars/${avatars.ban3}.jpg`);
    }
    if (avatars.ban4) {
      document.getElementById('b4').src = `avatars/${avatars.ban4}.jpg`;
      console.log(`Updating ban4: avatars/${avatars.ban4}.jpg`);
    }
    if (avatars.gbBan1) {
      document.getElementById('b5').src = `avatars/${avatars.gbBan1}.jpg`;
      console.log(`Updating gbBan1: avatars/${avatars.gbBan1}.jpg`);
    }
    if (avatars.gbBan2) {
      document.getElementById('b6').src = `avatars/${avatars.gbBan2}.jpg`;
      console.log(`Updating gbBan2: avatars/${avatars.gbBan2}.jpg`);
    }
    if (avatars.gbBan3) {
      document.getElementById('b7').src = `avatars/${avatars.gbBan3}.jpg`;
      console.log(`Updating gbBan3: avatars/${avatars.gbBan3}.jpg`);
    }
    if (avatars.gbBan4) {
      document.getElementById('b8').src = `avatars/${avatars.gbBan4}.jpg`;
      console.log(`Updating gbBan4: avatars/${avatars.gbBan4}.jpg`);
    }
    console.log("アバター画像を更新しました");
  }
});