#pragma once
#include "Shape.h"


class CRectangle :
    public CShape
{
public:
    CRectangle(int, int);
    int GetArea();
    CRectangle operator*(int) const;
    friend CRectangle operator*(int mul, const CRectangle&); //Friend function
};

