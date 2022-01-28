#include <iostream>
#include "Book.h"

int main()
{
    CBook web_book("HTML+CSS", 350);
    CBook html_book("Learning HTML in 21 days", 200);

    CBook copyBook(web_book);

    cout << "First Book's Title : " << web_book.m_strTitle << ", Total Page : " << web_book.m_nTotalPage << endl;
    cout << "Copy Book's Title : " << copyBook.m_strTitle << ", Total Page : " << copyBook.m_nTotalPage << endl;

    cout << web_book.ThickerBook(html_book).m_strTitle << endl;


    return 0;
}

