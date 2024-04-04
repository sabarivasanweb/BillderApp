import { View, Text, Pressable } from "react-native";
import Input from "@/components/Input";
import { useState } from "react";
import { Link, Navigator } from "expo-router";

function SignUpPage() {
  const [data, setData] = useState({});

  return (
    <View className="flex-1 flex justify-center items-center overflow-auto max-h-screen">
      <Text
        style={{
          fontFamily: "pacifico",
          fontSize: 40,
          color: "black",
          textAlign: "center",
        }}
      >
        Billder
      </Text>
      <View className="flex justify-start w-80 py-5">
        <Text className="font-bold text-xl text-start font-pacifico">
          Get started for free
        </Text>
      </View>
      <View className="w-80 py-2 pb-1">
        <Text className="w-full text-lg font-medium text-slate-600">Email</Text>
        <View className="flex flex-row ">
          <Input />
        </View>
      </View>
      <View className="w-80 py-1">
        <Text className="w-full text-lg font-medium text-slate-600">
          Password
        </Text>
        <Input />
      </View>
      <View className="w-80 py-1 pb-2">
        <Text className="w-full text-lg font-medium text-slate-600">
          Confirm password
        </Text>
        <Input />
      </View>
      <View className="py-5 w-80">
        <Pressable className=" rounded w-full bg-bckgnd py-3 active:bg-opacity-[0.85] transform scale-100 active:scale-105">
          <Text className="text-white font-bold text-center py-0.5">
            Get started
          </Text>
        </Pressable>
      </View>
      <View className="w-80 py-5 flex flex-row items-center">
        <Text className="text-slate-600 text-lg">Already have an account?</Text>
        <Link href="/UnauthPages/SignIn" asChild>
            <Text className="font-bold text-lg active:text-xl"> Sign In</Text>
        </Link>
      </View>
    </View>
  );
}

export default SignUpPage;
