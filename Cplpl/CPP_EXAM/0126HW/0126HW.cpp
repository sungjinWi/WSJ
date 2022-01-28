

#include <iostream>
#include "Fruit.h"


int main()
{
    CFruits booksObj;
    booksObj.m_FruitsName = "Shine Muscat";
    booksObj.m_FruitsNo = 30;
    booksObj.m_FruitsPrice = 5000;

    booksObj.PrintFruitInformation();
    
    return 0;
}


