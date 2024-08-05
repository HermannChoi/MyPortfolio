import TypeIt from "typeit-react";

const TypeItSpace = () => {
  const textStyle = {
    height: "30px",
    backgroundImage: "linear-gradient(to right, pink, skyblue)",
    WebkitBackgroundClip: "text", // 텍스트 색깔을 그라데이션에 맞추기 위한 설정
    color: "transparent", // 텍스트 자체의 색깔을 투명하게 설정
    fontSize: "100%",
    fontWeight: "bold",
  };

  return (
    <TypeIt
      style={textStyle}
      options={{ loop: true }}
      getBeforeInit={(instance) => {
        instance
          .type(`안녕하세요! `)
          .pause(600)
          .type("디테일 바라기 개발자, 최윤석입니다.")
          .pause(3000)
          .delete();

        return instance;
      }}
    />
  );
};

export default TypeItSpace;
