// 1/26 2번째

#include <iostream>
#include "StructExam.h"

//using namespace std;
using namespace BooksInfo;

//헤더파일에 넣는 부분

//struct Books
//{
//    char title[50]; //50bytes
//    char author[50];
//    char subject[100];
//    int book_id;
//};
//
////void PrintBooksInformation(struct Books book);
//
////포인터
//void PrintBooksInformation(Books* book);

int main()
{
    //struct Books book1;
    //Books book2; //struct 생략가능

    //동적할당 포인터
    Books* book1 = new Books; //Memory allocated in Heap Memory, instantiating

    Books book2;

    //strcpy_s(book1.title, _countof(book1.title), "Learn C++ Programming 21 days"); // 이게 standard

    /*strcpy_s(book1.title, "Learn C++ Programming 21 days");
    strcpy_s(book1.author, "Sieun Lee");
    strcpy_s(book1.subject, "C++ Programming in liquore");
    book1.book_id = 123456;
    PrintBooksInformation(book1);

    strcpy_s(book2.title, "Learn C++ Programming 21 days");
    strcpy_s(book2.author, "Hyein Lee");
    strcpy_s(book2.subject, "C++ Programming in liquore");
    book2.book_id = 456;
    PrintBooksInformation(book2);*/

    // 포인터
    strcpy_s(book1->title, "Learn C++ Programming 21 days");
    strcpy_s(book1->author, "Sieun Lee");
    strcpy_s(book1->subject, "C++ Programming in liquore");
    book1->book_id = 123456;
    PrintBooksInformation(book1);

    strcpy_s(book2.title, "Learn C++ Programming 21 days");
    strcpy_s(book2.author, "Hyein Lee");
    strcpy_s(book2.subject, "C++ Programming in liquore");
    book2.book_id = 456;
    PrintBooksInformation(&book2);

    struct Books book3 = SetBooksInformation((char*)"Welcome to Hell in C++", (char*)"Bjane stroustoup", (char*)"Hell in the C++", 3532);
    PrintBooksInformation(&book3);




    //cout << "book1 title : " << book1.title << ", author : " << book1.author << ", subject : " << book1.subject << ", book1_id : " << book1.book_id << endl;
    //cout << "book1 title : " << book2.title << ", author : " << book2.author << ", subject : " << book2.subject << ", book2_id : " << book2.book_id << endl;


    //동적할당
    delete book1;

    return 0;
}

//void PrintBooksInformation(struct Books book) //Books*인지 아닌지 기억이 안나누
//{
//    cout << "book title : " << book.title << ", author : " << book.author << ", subject : " << book.subject << ", book_id : " << book.book_id << endl;
//}



//포인터

//void PrintBooksInformation(Books* book)
//{
//    cout << "book title : " << book->title << ", author : " << book->author << ", subject : " << book->subject << ", book_id : " << book->book_id << endl;
//}
//헤더파일로 옮김
