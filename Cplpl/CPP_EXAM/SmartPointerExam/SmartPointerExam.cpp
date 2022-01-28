// 1/25 3번째

#include <iostream>
#include <memory>

using namespace std;

class CPerson {
private:
    string strName;
    int nAge;
public:
    CPerson(const string& name, int age);
    ~CPerson() { cout << "Object Destructor" << endl; }
    void ShowPersonInfo();
};

int main()
{
    //unique_ptr<CPerson> ptrPerson = make_unique<CPerson>("James Hetfield", 59);
    shared_ptr<CPerson> ptrPerson = make_shared<CPerson>("James Hetfield", 59);
    ptrPerson->ShowPersonInfo();
    cout << "Currently Own count : " << ptrPerson.use_count() << endl;
    auto james = ptrPerson;
    ptrPerson->ShowPersonInfo();

    cout << "Currently Own count : " << ptrPerson.use_count() << endl;

    ptrPerson->ShowPersonInfo();
    james.reset(); //다시 카운트 하나로

    cout << "Currently Own count : " << ptrPerson.use_count() << endl;


    return 0;
}

CPerson::CPerson(const string& name, int age)
{
    strName = name;
    nAge = age;
    cout << "Object constructor!!!" << endl;
}

void CPerson::ShowPersonInfo()
{
    cout << strName << "'s Age : " << nAge << endl;
}

