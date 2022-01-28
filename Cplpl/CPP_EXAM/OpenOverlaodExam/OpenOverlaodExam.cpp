#include <iostream>
#include "Box.h"

int main()
{
    CBox box1;
    CBox box2;
    CBox box3;
    double volume = 0.0f;

    box1.SetLength(6.5);
    box1.SetBreadth(7.0);
    box1.SetHeight(5.0);

    box2.SetLength(12.5);
    box2.SetBreadth(13.0);
    box2.SetHeight(10.0);

    volume = box1.GetVolume();
    cout << "Volume of box1 : " << volume << endl;

    volume = box2.GetVolume();
    cout << "Volume of box2 : " << volume << endl;

    box3 = box1 + box2; //box1이 this, box2가 b
    volume = box3.GetVolume();
    cout << "Volume of box3 : " << volume << endl;

    return 0;
}
