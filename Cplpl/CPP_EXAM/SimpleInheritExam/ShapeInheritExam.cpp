// 1/28 4번째

#include <iostream>
#include "Rectangle.h"
#include "Triangle.h"

int main()
{
    CRectangle* rect = new CRectangle(30, 50);
    CTriangle* triangle = new CTriangle();

    /*rect->SetWidth(30);
    rect->SetHeight(50);*/

    cout << "Rectangle Area : " << rect->GetArea() << endl;

    CRectangle rect1 = (*rect) * 2;

    cout << "Rectangle Area * 2 : " << rect1.GetArea() << endl; //pointer라서 .GetArea

    CRectangle rect2 = (*rect) * 4;

    cout << "Rectangle Area * 4 : " << rect2.GetArea() << endl;

    triangle->SetWidth(30);
    triangle->SetHeight(50);

    cout << "Triangle Area : " << triangle->GetArea() << endl;

    if (rect != NULL) delete rect;
    if (triangle != NULL) delete triangle;

    return 0;
}



