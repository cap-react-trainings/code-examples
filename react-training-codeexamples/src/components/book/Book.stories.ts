import BookItem from "./Book";
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Book/BookItem',
    component: BookItem,
    args: {
        book: {
            title: "An Introduction to C & GUI Programming, 2nd Edition",
            subtitle: "",
            isbn13: "9781912047451",
            price: "$12.94",
            image: "https://itbook.store/img/books/9781912047451.png",
            url: "https://itbook.store/books/9781912047451"
        }
    }
} satisfies Meta<typeof BookItem>;

export default meta;
type Story = StoryObj<typeof BookItem>;

export const CheapBook: Story = {};