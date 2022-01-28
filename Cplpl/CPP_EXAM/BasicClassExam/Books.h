#pragma once
using namespace std;
//include 되면 그곳의 include <iostream> <string>를 불러와서 사용가능

#pragma pack(push,1)
//struct BooksInfo
//{
//    string m_Title;
//    string m_Author;
//    string m_Subject;
//    int m_nBookId;
//};
#pragma pack(pop)

class CBooks
{
public:
    // constructor(객체 생성자)
    CBooks() 
    {
        cout << "CBooks Object Constructor!!!" << endl; 
        m_Title = "Default title";
        m_Author = "Default author";
        m_Subject = "Default subject";
        m_nBookId = 0;
    };

    //struct BooksInfo m_BooksInfo;
    string m_Title; //헝가리안 타입
    string m_Author;
    string m_Subject;
    int m_nBookId;

    void PrintBookInformation();
};

void CBooks::PrintBookInformation()
{
    cout << "Book title : " << m_Title << endl;
    cout << "Book author : " << m_Author << endl;
    cout << "Book subject : " << m_Subject << endl;
    cout << "Book ID : " << m_nBookId << endl << endl;
}