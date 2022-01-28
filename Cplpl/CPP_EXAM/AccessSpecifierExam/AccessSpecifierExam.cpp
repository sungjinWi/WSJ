// 1/28 첫번째

#include <iostream>

using namespace std;

class CBox
{
protected:
    double m_width; // member func란걸 알려주기 위해
}; // class 는 ; 붙여주기

class CSmallBox : public CBox
{
public:
    void SetSmallWidth(double width);
    double GetSmallWidth();
};

void CSmallBox::SetSmallWidth(double width)
{
    m_width = width;
}

double CSmallBox::GetSmallWidth()
{
    return m_width;
}

int main()
{
    CSmallBox* smallBox = new CSmallBox(); 

    smallBox->SetSmallWidth(5.0);

    cout << "Width of smallbox : " << smallBox->GetSmallWidth() << endl;

    delete smallBox;

    return 0;
}

