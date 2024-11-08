"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { SettingsIcon, CheckIcon } from "lucide-react"
import { Tag } from "@/lib/types"
import { setUserTags } from "@/actions/setUserTags"

const tags = [
  {id: "1", name: "Top News"},
  {id: "2", name: "World news"},
  {id: "3", name: "India news"},
  {id: "4", name: "Europe news"},
  {id: "5", name: "Asia news"},
  {id: "6", name: "Business"},
  {id: "7", name: "Earnings"},
  {id: "8", name: "Economy"},
  {id: "9", name: "Finance"},
  {id: "10", name: "Tech"},
  {id: "11", name: "Politics"},
  {id: "12", name: "Health care"},
  {id: "13", name: "Small business"},
  {id: "14", name: "Energy"},
  {id: "15", name: "Retail"},
  {id: "16", name: "Investing"},
  //add more
]

export function EditFeedDialog() {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const onTagClick = (tag: Tag) => {
    setSelectedTags(prev => 
      prev.some(t => t.id === tag.id)
        ? prev.filter(t => t.id !== tag.id)   
        : [...prev, tag]
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" aria-label="Edit Feed" className="px-2 font-bold text-lg "> 
          Edit feed 
          <SettingsIcon className="ml-2 w-5 h-5" /> 
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Edit your feed</DialogTitle>
          <DialogDescription>
            Select the topics you want to see in your feed and click save.
          </DialogDescription>  
        </DialogHeader>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => {
            let isSelected = selectedTags.some(t => t.id === tag.id);
            return (  
              <Badge 
                key={tag.id} 
                variant={isSelected ? "selected" : "outline"}
                className="h-10 w-fit cursor-pointer"
                onClick={() => onTagClick(tag)}
              >
                {isSelected && <CheckIcon className="w-4 h-4 mr-2 animate-in" />}
                <div>{tag.name}</div>
              </Badge>
            );
          })}
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => setUserTags(selectedTags)}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
