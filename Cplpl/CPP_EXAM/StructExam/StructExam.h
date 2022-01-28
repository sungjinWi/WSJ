#pragma once

using namespace std;

namespace BooksInfo
{
    //원형

    struct Books
    {
        char title[50]; //50bytes
        char author[50];
        char subject[100];
        int book_id;
    };

    //tag로 바꿈 앞에 struct 빼고 BooksTag로

    //typedef struct //typedef는 tag
    //{
    //    char title[50]; //50bytes
    //    char author[50];
    //    char subject[100];
    //    int book_id;
    //}BooksTag;

    void PrintBooksInformation(Books* book)
    {
        cout << "book title : " << book->title << ", author : " << book->author << ", subject : " << book->subject << ", book_id : " << book->book_id << endl;

        return; //void는 return 안해도 됨
    }

    struct Books SetBooksInformation(char* title, char* author, char* subject, int bookId)
    {
        struct Books book;

        strcpy_s(book.title, title);
        strcpy_s(book.author, author);
        strcpy_s(book.subject, subject);
        book.book_id = bookId;

        return book; //void가 아니면 return해줘야 한다
    }
}
