// Swift file for random number handling
import Foundation
func randomNumber() -> Int {
    return Int(arc4random_uniform(100))
}
print(randomNumber())
100;