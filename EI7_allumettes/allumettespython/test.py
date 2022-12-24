N=5
def fn(n):
    if n!=0:
        print(n*' '+((N-n)*2+1)*'*')
        fn(n-1)
    else:
        print(N*' '+'#')

fn(N)


