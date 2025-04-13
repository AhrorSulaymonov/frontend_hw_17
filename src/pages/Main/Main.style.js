import styled from "styled-components";
import { colors } from "../../styles/theme";

// Provided colors object

export const DiscountWrapper = styled.div`
  display: flex; // Enables flexbox layout
  max-width: 1714px; // Maximum width of the banner
  min-height: 500px; // Minimum height of the banner
  background-color: ${colors.light}; // Use light color for background: ;
  font-family: "Manrope", sans-serif; // Set font
  margin: 50px auto; // Center banner horizontally on page and add top/bottom margin
  justify-content: center; // Horizontally center items
  align-items: center; // ***** Vertically align the flex items (div and img boxes) in the center *****
  gap: 100px; // Adjust gap between text and image (try reducing if needed)
  border-radius: 50px; // Rounded corners
  padding: 0px auto; // Internal padding
  box-sizing: border-box;
  overflow: hidden; // Prevent content overflow

  // Styles for the text block container (the div)
  & > div {
    color: ${colors.main}; // Use main color for text
    font-weight: 700;
    font-size: 60px; // Base font size
    line-height: 1.15; // Adjust line spacing
    letter-spacing: 0%;
    text-align: left;
    flex-shrink: 0; // Prevent text block from shrinking
    // Ensure the text block itself doesn't have extra margin pushing things down
    margin: 0;
    padding: 0;

    // Styles for the date badge (span)
    & > span {
      display: inline-block;
      background-color: ${colors.main}; // Use main color for badge background
      color: ${colors.white}; // Use white color for badge text
      border-radius: 999px; // Pill shape
      padding: 18px 40px; // Badge padding
      font-size: 36px; // Badge font size
      font-weight: 700;
      line-height: 1;
      margin-top: 30px; // Space above the badge
      white-space: nowrap;
    }
  }

  // Styles for the image
  & > img {
    display: block;
    max-height: 450px;
    height: auto;

    object-fit: contain;
    object-position: top; // <--- TRY THIS!

    // align-self: flex-start; // <-- Alternative: Aligns the entire <img> box to the top. Try this if object-position doesn't work as expected. Remove object-position if using this.
  }
`;

// Asosiy Section uchun mavjud styled component
export const SectionCatalog = styled.section`
  /* padding-top: 2.5rem; */ /* py-10 */
  /* padding-bottom: 2.5rem; */
  /* Yuqoridagi paddinglar Container ichiga ko'chiriladi */
`;

// Kontent uchun container (padding, max-width, margin)
export const CatalogContainer = styled.div`
  padding-top: 2.5rem; /* py-10 */
  padding-bottom: 2.5rem;
  padding-left: 1.25rem; /* px-5 */
  padding-right: 1.25rem;
  max-width: 72rem; /* max-w-6xl */
  margin-left: auto;
  margin-right: auto;
  font-family: sans-serif; /* font-sans */
`;

// Yuqori qism (Sarlavha + Tugma)
export const Header = styled.div`
  display: flex;
  flex-direction: column; /* default: flex-col */
  justify-content: space-between;
  align-items: flex-start; /* default: items-start */
  margin-bottom: 2rem; /* mb-8 */
  gap: 1rem; /* gap-4 */

  @media (min-width: 640px) {
    /* sm: breakpoint */
    flex-direction: row;
    align-items: center; /* sm:items-center */
  }
`;

// Sarlavha (Каталог)
export const Title = styled.h2`
  font-size: 2.25rem; /* text-4xl */
  line-height: 2.5rem;
  font-weight: 700; /* font-bold */
  color: ${colors.gray800};

  @media (min-width: 768px) {
    /* md: breakpoint */
    font-size: 3rem; /* text-5xl */
    line-height: 1;
  }
`;

// "Весь каталог" tugmasi
export const ViewAllButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.625rem 1.5rem; /* py-2.5 px-6 */
  border: 1px solid ${colors.gray300}; /* border border-gray-300 */
  border-radius: 9999px; /* rounded-full */
  background-color: ${colors.white}; /* bg-white */
  color: ${colors.gray800};
  font-size: 1rem; /* text-base */
  transition: background-color 200ms ease-in-out; /* transition duration-200 ease-in-out */
  cursor: pointer;
  align-self: flex-start; /* default: self-start */

  &:hover {
    background-color: ${colors.gray100}; /* hover:bg-gray-100 */
  }

  @media (min-width: 640px) {
    /* sm: breakpoint */
    align-self: auto; /* sm:self-auto */
  }

  /* ArrowIcon uchun joy */
  svg {
    margin-left: 0.5rem; /* ml-2 */
    width: 1em; /* Ikonka o'lchamini moslashtiring */
    height: 1em;
  }
`;

// Kartochkalar gridi
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr)); /* grid-cols-1 */
  gap: 1.5rem; /* gap-6 */

  @media (min-width: 640px) {
    /* sm: breakpoint */
    grid-template-columns: repeat(2, minmax(0, 1fr)); /* sm:grid-cols-2 */
  }

  @media (min-width: 1024px) {
    /* lg: breakpoint */
    grid-template-columns: repeat(3, minmax(0, 1fr)); /* lg:grid-cols-3 */
  }
`;

// Alohida kartochka
export const Card = styled.div`
  position: relative; /* relative */
  background-color: ${colors.gray100}; /* bg-gray-100 */
  border-radius: 1rem; /* rounded-2xl */
  padding: 1.5rem; /* p-6 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px; /* min-h-[200px] */
  overflow: hidden; /* overflow-hidden */
  transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out; /* transition duration-200 ease-in-out */
  cursor: pointer;
  background-color: ${colors.light};

  &:hover {
    transform: translateY(-4px); /* hover:translate-y-[-4px] */
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); /* hover:shadow-md */
  }
`;

// Kartochkadagi matn qismi
export const CardTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1; /* flex-grow */
  margin-bottom: 1rem; /* mb-4 - rasm bilan oraliq uchun, kerakmas bo'lishi ham mumkin */
  position: relative; /* Ensure text is above image */
  z-index: 10; /* z-10 */
`;

// Kartochka sarlavhasi (Lyustralar, Bra, va hokazo)
export const CardTitle = styled.h3`
  font-size: 1.25rem; /* text-xl */
  line-height: 1.75rem;
  font-weight: 600; /* font-semibold */
  color: ${colors.gray800};
  margin-bottom: 0.5rem; /* mb-2 */
`;

// Narx/havola qismi ("От 540Р")
export const CardPrice = styled.span`
  font-size: 1rem; /* text-base */
  color: ${colors.gray600};
  display: flex;
  align-items: center;
  margin-top: auto; /* mt-auto */

  /* ArrowIcon uchun joy */
  svg {
    margin-left: 0.375rem; /* ml-1.5 */
    width: 0.8em; /* Ikonka o'lchamini moslashtiring */
    height: 0.8em;
    opacity: 0.7; // Make arrow slightly less prominent
  }
`;

// Rasm uchun absolute konteyner
export const CardImageWrapper = styled.div`
  position: absolute; /* absolute */
  right: 1rem; /* right-4 */
  bottom: 1rem; /* bottom-4 */
  width: 50%; /* w-1/2 */
  max-width: 150px; /* max-w-[150px] */
  display: flex;
  align-items: flex-end; /* items-end */
  justify-content: flex-end; /* justify-end */
  z-index: 0; /* z-0 */
`;

// Kartochkadagi rasm
export const CardImage = styled.img`
  max-width: 100%; /* max-w-full */
  max-height: 120px; /* max-h-[120px] */
  height: auto; /* h-auto */
  object-fit: contain; /* object-contain */
`;
