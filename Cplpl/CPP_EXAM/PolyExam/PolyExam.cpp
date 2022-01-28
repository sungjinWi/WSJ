// 1/28 6번쨰

#include <iostream>
#include "Rectangle.h"
#include "Triangle.h"

int main()
{
    CShape* shape; //온전히 파생클래스의 내용 실행
    CRectangle rect(20, 30);
    CTriangle tri(10, 30);

    // store the address of rectangle
    shape = &rect;

    // call rectangle area
    shape->Area();


    // store the address of triangle
    shape = &tri;

    // call rectangle area
    shape->Area();

    return 0;
}


