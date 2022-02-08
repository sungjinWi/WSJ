// 2/04 4번째

#include <iostream>
#include <vector>

using namespace std;

int main()
{
    vector<int> vec;

    vec.push_back(10); //맨뒤에 10추가
    vec.push_back(20);
    vec.push_back(30);
    vec.push_back(40);

    /*for (vector<int>::size_type i = 0; i < vec.size(); i++)
    {
        cout << "vec " << i << " : " << vec[i] << endl;
    }*/

    for (vector<int>::iterator itr = vec.begin(); itr != vec.end(); ++itr)
    {
        cout << "vector itr : " << *itr << endl; //iterator 값을 쓸 때는 항상 포인터연산자 * 를 쓴다
    } // itr은 레퍼런스를 반환한다 &같은 것이라고 보면됨

    vector<int>::iterator itr = vec.begin() + 2;
    cout << "third element : " << *itr << endl;

    return 0;
}

//vector는 임의의 위치 추가나 제거는 느리다 , 하고나서 한칸씩 전부 이동해야하기 때문에 / 맨끝에 붙힐때는 굉장히 빠르다