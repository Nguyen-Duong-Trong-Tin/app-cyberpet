const state = () => {
  return {
    userList: [
      {
        id: 1,
        name: "Nguyễn Phong Hào",
        age: 22,
        email: "hao@gmail.com",
        avatar:
          "https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-cho-con-gai-1.jpg",
        typePets: ["Chó", "Mèo"],
      },
      {
        id: 2,
        name: "Vương Mộng Hùng",
        age: 21,
        email: "hung@gmail.com",
        avatar:
          "https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-cho-con-gai-1.jpg",
        typePets: ["Chuột", "Cá"],
      },
    ]
  }
};

export default {
  namespaced: true,
  state,
}