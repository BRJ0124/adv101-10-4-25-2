import Color from "@/components/Color";

export default function Home() {

  const number = 20;
  const colors = ['red', 'green', 'blue'];

  function buttonClicked(color) {
    alert(color);
  }

  return (
    <div>
      Hello World! {number}
      <ul>
        {colors.map((value, index) => {
          return <Color buttonClicked={() => buttonClicked(value)} 
                        key={index} 
                        color={value} 
                        fontSize={14} />;
        })}
      </ul>
    </div>
  )
}