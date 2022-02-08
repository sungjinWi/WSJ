// 2/07 2번째

#include <iostream>
#include <set>

using namespace std;

template <typename T>
void PrintSetElement(set<T>& s)
{
    cout << "[";
    for (typename set<T>::iterator itr = s.begin(); itr != s.end(); ++itr)
        // 포인터 연산자를 재정의 해서 마치 참조연산자처럼 쓰게 해준다
    {
        cout << *itr << " ";
    }
    cout << "]\n";
}

int main()
{
    set<int> s;
    s.insert(10);
    s.insert(50);
    s.insert(20);
    s.insert(30);
    s.insert(40);

    cout << "Initial status set : sorted print" << endl;
    PrintSetElement(s);

    cout << "20 is s element ? :: ";
    // set<int>::iterator itr = s.find(20);
    auto itr = s.find(20); // auto 어떠한 변수 type이 되도 된다
    if (itr != s.end())
    {
        cout << "Yes" << endl;
    }
    else
    {
        cout << "No" << endl;
    }

    cout << "25 is s element ? :: ";
    itr = s.find(25); // 여긴 auto가 있으면 안돼
    if (itr != s.end())
    {
        cout << "Yes" << endl;
    }
    else
    {
        cout << "No" << endl;
    }

    set<int> nSet;
    nSet.insert(10);
    nSet.insert(30);
    nSet.insert(10);
    nSet.insert(30);
    nSet.insert(40);
    nSet.insert(20);
    cout << "nSet : ";
    PrintSetElement(nSet);

    return 0;
}
