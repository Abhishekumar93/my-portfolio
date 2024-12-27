import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ID;
const bucketName = process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME;

const getSupabaseClient = () => {
  if (!supabaseUrl && !supabaseKey && !bucketName) return null;

  const supabase = createClient(supabaseUrl as string, supabaseKey as string);
  return supabase;
};

const getMediaList = async () => {
  const supabaseClient = getSupabaseClient();

  if (!supabaseClient) return null;
  const { data, error } = await supabaseClient.storage
    .from(bucketName as string)
    .list();

  if (error) return null;
  if (data.length === 0) return [];

  const mediaList = await Promise.all(
    data.map(async (item: any) => ({
      ...item,
      url: await generatePublicUrl(supabaseClient, item.name),
    })),
  );
  return mediaList;
};
const generatePublicUrl = async (client: any, fileName: string) => {
  const response = await generateSignedUrl(client, fileName);

  if (!response) return null;
  return response;
};
const generateSignedUrl = async (client: any, fileName: string) => {
  const { data, error } = await client.storage
    .from(bucketName as string)
    .createSignedUrl(fileName, 900);
  if (error) return null;

  return data.signedUrl;
};

export default getMediaList;
