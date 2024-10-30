import { Meta, StoryObj } from "@storybook/react/*";
import CreateBook from "./CreateBook";
import { fn, userEvent, waitFor, within, expect } from '@storybook/test';
import { Book } from "./BookList";

const meta = {
    title: 'Book/CreateBook',
    component: CreateBook,
    args: {
            onSave: fn(),
            onExit: fn(),
    }
} satisfies Meta<typeof CreateBook>;

export default meta;
type Story = StoryObj<typeof CreateBook>;

export const AddNewBook: Story = {
    play: async ({ args, canvasElement }) => {
        const book = {
            title: "An Introduction to C & GUI Programming",
            subtitle: "2nd Edition",
            isbn13: "9781912047451",
            price: "$12.94",
            image: "https://itbook.store/img/books/9781912047451.png",
            url: "https://itbook.store/books/9781912047451"
        } as Book

        const canvas = within(canvasElement);
        await userEvent.type(canvas.getByLabelText('Title:'), book.title);
        await userEvent.type(canvas.getByLabelText('Subtitle:'), book.subtitle);
        await userEvent.type(canvas.getByLabelText('ISBN:'), book.isbn13);
        await userEvent.type(canvas.getByLabelText('Price:'), book.price);
        await userEvent.type(canvas.getByLabelText('Image:'), book.image);
        await userEvent.type(canvas.getByLabelText('URL:'), book.url);

        await userEvent.click(canvas.getByRole('button', {name: 'save'}));
        await waitFor(() => expect(args.onSave).toHaveBeenCalledWith(book));
    }}