import * as D from "../data";

export default function Demo() {
  return (
    <>
      <h1>Demo</h1>
      <p>
        {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
      </p>
      <img src={D.randomAvatar()} width={100} height={100} alt="avatar" />
      <img src={D.randomImage()} width={100} height={100} alt="random image" />
    </>
  );
}
