// 2/07 6번째

#include <iostream>
#include <vector>
#include <algorithm>
#include <functional>

using namespace std;

template <typename T>
void PrintVector(T begin, T end)
{
    while (begin != end)
    {
        cout << *begin << " ";
        begin++;
    }
    cout << endl;
}

class IntCompare
{
public:
    bool operator()(const int& a, const int& b) const { return (a > b); } // Decending sorting operator 재정의
};

template <class t1, class t2 >
class GreaterComp
{
public:
    bool operator()(const t1& a, const t2& b) const { return (a > b); } // decending sorting operator 재정의

};

int main()
{
    vector<int> vec;
    vec.push_back(5);
    vec.push_back(2);
    vec.push_back(3);
    vec.push_back(1);
    vec.push_back(6);
    vec.push_back(4);
    vec.push_back(8);
    vec.push_back(7);
    cout << "Before Sorting\n";
    PrintVector(vec.begin(), vec.end());

    //sort(vec.begin(), vec.end(), IntCompare());
    //sort(vec.begin(), vec.end(), GreaterComp<int, int>());
    sort(vec.begin(), vec.end(), greater<int>());
    cout << "After Sorting\n";
    PrintVector(vec.begin(), vec.end());

    return 0;
}
