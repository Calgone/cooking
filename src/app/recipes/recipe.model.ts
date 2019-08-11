export interface Recipe {
    id: number;
    title: string;
    description: string;
    status: string;
    userId: number;
    ingredient_groups: [];
    public: boolean;
    steps: [];
    cost: number;
    servings: number;
    prep_minutes: number;
    cook_minutes: number;
    rest_minutes: number;
    difficulty: number;
    img_path: string;
    created_at: Date;
    updated_at: Date;
}
