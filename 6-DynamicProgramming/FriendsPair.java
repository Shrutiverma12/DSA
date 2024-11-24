import java.util.* ;
public class FriendsPair {
    public static long [] dp;
    public static long mod = 1000000007;
    public static long pairs(int n){
        if(n<=2) return n;

        if(dp[n] != -1) return dp[n] ;

        long single = pairs(n-1)%mod;
        long pairWays =  ((n-1)%mod *pairs(n-2)%mod)%mod;
        return dp[n] = (single%mod + pairWays%mod)%mod;
    }
    public static int numberOfWays(int n) {
        // Write your code here.
        dp = new long[100005];
        Arrays.fill(dp,-1);
        return (int)pairs(n);
    }
}
