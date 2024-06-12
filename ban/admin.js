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
    const database = firebase.database();
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // FormDataのインスタンスを作成
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
                data[key] = value;
        });

        // Firebaseにデータを保存
        const userRef = database.ref('bans');
        userRef.set(data)
            .then(() => {
                console.log("データが正常に保存されました");
            })
            .catch((error) => {
                console.error('Error:', error);
                alert("エラーが発生しました");
            });
    });
});
