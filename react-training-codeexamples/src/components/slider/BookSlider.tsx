import { Slider } from "@mui/material";

interface Props {
  numberOfBooks: number;
  onSliderChange: (value: number) => void;
}

export const BookSlider: React.FC<Props> = ({
  numberOfBooks,
  onSliderChange,
}: Props) => {
  const onSlide = (event: Event) => {
    const element = event.target as HTMLInputElement;
    onSliderChange(parseInt(element.value));
  };

  return (
    <>
      <label id="sliderlabel">Select the number of books to display:</label>
      <Slider
        sx={{
          mt: 4,
          color: "#66bb6a",
        }}
        aria-labelledby="sliderlabel"
        defaultValue={Math.round(numberOfBooks / 2)}
        getAriaValueText={(value: number) => value.toString() + " books"}
        onChange={onSlide}
        step={1}
        min={0}
        max={numberOfBooks}
        marks
        valueLabelDisplay="auto"
      />
    </>
  );
};

export default BookSlider;
