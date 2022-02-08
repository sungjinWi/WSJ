// 2/04 7번째

#include <iostream>
#include <vector>

using namespace std;

template <typename T>
void PrintVector(vector<T>& vc)
{
    cout << "[";
    for (typename vector<T>::iterator itr = vc.begin(); itr != vc.end(); ++itr)
    {
        cout << *itr << " ";
    }
    cout << "]\n";
}

//auto 자동 타입
template <typename T>
void print_vector_range_based(vector<T>& vec)
{
    for (const auto& elem : vec)
    {
        cout << elem << endl;
    }
}


int main()
{
    vector<int> vec;
    vec.push_back(10);
    vec.push_back(20);
    vec.push_back(30);
    vec.push_back(40);
    vec.push_back(20);
    
    cout << "Initiate status vector" << endl;
    PrintVector(vec);

    vector<int>::iterator itr = vec.begin() + 2; // vec[2]
    *itr = 50;
    cout << "======================================\n";
    PrintVector(vec);

    vector<int>::const_iterator citr = vec.cbegin() + 2;

    // cannot assign to a variable that is const iterator
    //*citr = 70;


    //reverse vector
    cout << "======================================\n";
    cout << "Reverse vector print" << endl;
    vector<int>::reverse_iterator ritr = vec.rbegin();
    cout << "[";
    for (; ritr != vec.rend(); ++ritr)
    {
        cout << *ritr << " ";
    }
    cout << "]\n";

    cout << "======================================\n";

    vector<int> nVector;
    nVector.push_back(1);
    nVector.push_back(2);
    nVector.push_back(3);

    //reverse print를 reverse itr 안쓰고 하는법인데 왜 에러요
    //vector index는 부호 없는 정수라서 0 -1이 -1이 아니다
    /*for (vector<int>::size_type i = nVector.size() - 1; i >= 0; i--)
    {
        cout << nVector[i] << endl;
    }*/
    //결론은 그냥 reverse 쓰자


    // 범위기반 출력
    for (int elem : nVector)
    {
        cout << "element : " << elem << endl;
    }

    print_vector_range_based(nVector); //auto가 vectro<T>를 인식한다

    auto nNum = 10;
    auto strHello = "Hello";

    cout << "nNum : " << nNum << ", strHello : " << strHello << endl;

    return 0;
}
