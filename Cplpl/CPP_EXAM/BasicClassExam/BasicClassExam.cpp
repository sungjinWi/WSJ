// 1/26 4번째

#include <iostream>
#include <string>
#include "Books.h"
#include "Car.h"

int main()
{
    CBooks booksObj; // 이때 constructor가 제일먼저 실행된다
    booksObj.PrintBookInformation(); // constructor가 준 default값이 실행됨


    booksObj.m_Title = "Learning C++ 21 days";
    booksObj.m_Author = "Sieun Lee";
    booksObj.m_Subject = "Learning C++ Programming";
    booksObj.m_nBookId = 19980225;

    booksObj.PrintBookInformation();
    
    CBooks cppBook;
    cppBook.m_Title = "Learning C++ 21 days";
    cppBook.m_Author = "Hades";
    cppBook.m_Subject = "Learning C++ Programming in Olympus";
    cppBook.m_nBookId = 20220101;
    
    cppBook.PrintBookInformation();

    CCar carObj;
    carObj.m_strCompany = "BMW";
    carObj.m_strCarName = "BMW X5";
    carObj.m_strCarNo = "NY 3634";

    carObj.PrintCarInformation();


    //method로 넣어버림
    /*cout << "Book title : " << booksObj.m_Title << endl;
    cout << "Book author : " << booksObj.m_Author << endl;
    cout << "Book subject : " << booksObj.m_Subject << endl;
    cout << "Book ID : " << booksObj.m_nBookId << endl;*/

    cout << carObj.m_strCarName << " Maximum speed :" << carObj.CarSpeed(220) << endl;
    

    return 0;
}




