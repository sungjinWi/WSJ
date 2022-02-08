// 2/07 4번째 

#include <iostream>
#include <map>
#include <string>

using namespace std;

template <typename K, typename V>
void PrintMapElement(map<K, V>& m)
{
    for (auto itr = m.begin(); itr != m.end(); ++itr)
    {
        cout << itr->first << ", " << itr->second << endl;
    }
}

template <typename K, typename V>
void SearchPrintElement(map<K, V>& m, K key)
{
    auto itr = m.find(key);
    if (itr != m.end())
    {
        cout << key << " => " << itr->second << endl;
    }
    else
    {
        cout << key << " is not found in map" << endl;
    }
}

int main()
{
    map<string, double> pitcherList;

    pitcherList.insert(pair<string, double>("Kershaw", 0.12));
    pitcherList.insert(pair<string, double>("DDung", 7.89));
    pitcherList.insert(pair<string, double>("Otani", 5.34));

    //pair 다른 방식
    pitcherList.insert(make_pair("Chanho", 2.12));
    pitcherList.insert(make_pair("Sunwoo", 3.14));
    pitcherList.insert(make_pair("KwangHyun", 1.55));

    //다른 방식 2
    pitcherList["DongRyul"] = 3.45;
    pitcherList["DongWon"] = 1.67;
    pitcherList["ChooChoo"] = 2.51;

    PrintMapElement(pitcherList);

    cout << "Chanho's ERA : " << pitcherList["Chanho"] << endl;
    cout << "ChooChoo's ERA : " << pitcherList["ChooChoo"] << endl;
    pitcherList["ChooChoo"] = 8.51;
    cout << "ChooChoo's ERA after change : " << pitcherList["ChooChoo"] << endl;

    SearchPrintElement(pitcherList, string("Chaboom")); //string으로 type casting 해줘야한다
    SearchPrintElement(pitcherList, string("ChooChoo")); 

    return 0;
}