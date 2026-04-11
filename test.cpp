#include<iostream>
using namespace std;

void sum(int a, int b){
    cout << "The sum of " << a << " and " << b << " is: " << a + b << endl;
}

int main(){
    int a, b;
    cin >> a >> b;
    
    sum(a, b);

    return 0;
}