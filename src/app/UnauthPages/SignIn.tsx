import axios from "axios";
import { Link } from "expo-router";
import { View, Text, TextInput, Pressable } from "react-native";

function SignInPage() {
  const googleSignIn = () => {
    axios.get('http://192.168.29.111:3000/auth/google/signin').catch(e => console.log(e));
  }

  return (
    <View className="flex-1 flex justify-center items-center">
      <Text style={{ fontFamily: "pacifico", fontSize: 40, color: "black" }}>
        Billder
      </Text>
      <View className="flex justify-start w-80 py-5">
        <Text  className="font-bold text-2xl text-start font-pacifico">Sign in</Text>
      </View>
      <View className="w-80 py-4">
        <Text className="w-full text-lg font-bold">Phone Number</Text>
        <TextInput
          className="rounded-md border text-lg border-slate-300 focus:border-black w-full py-2 px-3 focus:outline-none text-black my-3"
        />
      </View>
      <View className="w-80 pb-4 ">
        <Text className="w-full text-lg font-bold">Password</Text>
        <TextInput
          className="rounded-md border text-lg border-slate-300 focus:border-black w-full py-2 px-3 focus:outline-none text-black my-3"
        />
      </View>
      <View className="py-5 w-80">
        <Pressable className=" rounded w-full bg-bckgnd py-3 active:bg-opacity-[0.85] transform scale-100 active:scale-105" onPress={googleSignIn}>
            <Text className="text-white font-bold text-center py-0.5">Get started</Text>
        </Pressable>
      </View>
      <View className="w-80 py-5 flex flex-row items-center">
        <Text className="text-slate-600 text-lg">Dont have an account?</Text>
        <Link href="/UnauthPages/SignUp" asChild> 
        <Text className="font-bold text-lg active:text-xl">  Sign Up</Text>

        </Link>
      </View>
    </View>
  );
}

export default SignInPage;
